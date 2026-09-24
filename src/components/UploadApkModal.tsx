import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, UploadCloud, FileCheck, RefreshCw, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { ApkPackage } from '../types';
import { saveCustomApk, deleteCustomApk } from '../utils/apkStorage';

interface UploadApkModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeApk: ApkPackage;
  onApkUpdated: (newApk: ApkPackage) => void;
}

export const UploadApkModal: React.FC<UploadApkModalProps> = ({
  isOpen,
  onClose,
  activeApk,
  onApkUpdated,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [appName, setAppName] = useState('NAXAL BLOUSE BETA');
  const [filename, setFilename] = useState('naxal_debug_v1.apk');
  const [version, setVersion] = useState('Debug v1');
  const [description, setDescription] = useState(
    'Bespoke blouse design engine with 3D saree preview, custom measurement records, and master tailor booking.'
  );
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      // Auto-populate filename if user selects one
      if (file.name.endsWith('.apk')) {
        setFilename(file.name);
      } else {
        setFilename(`${file.name}.apk`);
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      if (file.name.endsWith('.apk')) {
        setFilename(file.name);
      } else {
        setFilename(`${file.name}.apk`);
      }
    }
  };

  const handleSaveApk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setIsError(true);
      setStatusMessage('Please select or drop an APK file first.');
      return;
    }

    try {
      setIsSaving(true);
      setIsError(false);
      setStatusMessage(null);

      const saved = await saveCustomApk({
        file: selectedFile,
        name: appName,
        filename: filename || 'naxal_debug_v1.apk',
        version: version || 'Debug v1',
        description,
      });

      onApkUpdated(saved);
      setStatusMessage(`Successfully uploaded ${saved.filename}! Active for downloads.`);
      setTimeout(() => {
        onClose();
        setStatusMessage(null);
      }, 1400);
    } catch (err) {
      console.error(err);
      setIsError(true);
      setStatusMessage('Failed to store APK file. Check storage permissions.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetToDefault = async () => {
    try {
      setIsSaving(true);
      await deleteCustomApk();
      const defaultApkModule = await import('../utils/apkStorage');
      onApkUpdated(defaultApkModule.DEFAULT_APK);
      setSelectedFile(null);
      setStatusMessage('Reset to official default naxal_blouse_v1.apk release.');
      setTimeout(() => {
        setStatusMessage(null);
        onClose();
      }, 1200);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg"
          />

          {/* Modal Container */}
          <motion.div
            id="upload-apk-modal-container"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg apple-glass-modal rounded-2xl p-5 sm:p-7 border border-amber-500/30 z-10 my-auto shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold gold-gradient-text leading-tight">
                    Upload NAXAL APK
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Deploy your custom build (e.g. naxal_debug_v1.apk)
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Currently Active Badge */}
            <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 text-xs">
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">
                  Currently Active on Site
                </div>
                <div className="font-semibold text-amber-200 truncate flex items-center gap-1.5 mt-0.5">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{activeApk.filename}</span>
                  <span className="text-[10px] text-zinc-400 font-normal">({activeApk.fileSize})</span>
                </div>
              </div>

              {activeApk.isCustomUpload && (
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  className="px-2.5 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 text-[11px] font-medium flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                  title="Remove uploaded custom APK and restore default"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Restore Default</span>
                </button>
              )}
            </div>

            {/* Upload Form */}
            <form onSubmit={handleSaveApk} className="space-y-4 text-xs sm:text-sm">
              {/* Drag & Drop Area */}
              <div>
                <label className="block text-zinc-300 mb-1.5 font-medium">
                  Select or Drop APK File (.apk)
                </label>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
                    selectedFile
                      ? 'border-amber-400 bg-amber-500/10'
                      : 'border-zinc-700 hover:border-amber-500/50 bg-black/40 hover:bg-black/60'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".apk,application/vnd.android.package-archive"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {selectedFile ? (
                    <div className="flex flex-col items-center">
                      <FileCheck className="w-8 h-8 text-amber-300 mb-1" />
                      <span className="font-medium text-amber-200 truncate max-w-xs">
                        {selectedFile.name}
                      </span>
                      <span className="text-zinc-400 text-xs mt-0.5">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to deploy
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center py-2">
                      <UploadCloud className="w-8 h-8 text-zinc-400 mb-2 group-hover:text-amber-300 transition-colors" />
                      <span className="text-zinc-200 font-medium">
                        Tap to browse or drop your APK file here
                      </span>
                      <span className="text-zinc-500 text-xs mt-1">
                        Select naxal_debug_v1.apk or any Android binary
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Grid: App Name & APK Filename */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 mb-1 font-medium text-xs">
                    App Display Name
                  </label>
                  <input
                    type="text"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="NAXAL BLOUSE BETA"
                    className="w-full px-3 py-2 rounded-lg bg-black/60 border border-zinc-700 focus:border-amber-400 text-zinc-100 placeholder-zinc-500 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1 font-medium text-xs">
                    Target Filename (.apk)
                  </label>
                  <input
                    type="text"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    placeholder="naxal_debug_v1.apk"
                    className="w-full px-3 py-2 rounded-lg bg-black/60 border border-zinc-700 focus:border-amber-400 text-zinc-100 placeholder-zinc-500 text-xs sm:text-sm font-mono outline-none transition-all"
                  />
                </div>
              </div>

              {/* Version & Build */}
              <div>
                <label className="block text-zinc-300 mb-1 font-medium text-xs">
                  Version or Build Tag
                </label>
                <input
                  type="text"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  placeholder="Debug v1 (e.g. 1.0.0-beta.2)"
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-zinc-700 focus:border-amber-400 text-zinc-100 placeholder-zinc-500 text-xs sm:text-sm outline-none transition-all"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-zinc-300 mb-1 font-medium text-xs">
                  Description / Release Notes
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe key features or updates in this APK build..."
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-zinc-700 focus:border-amber-400 text-zinc-100 placeholder-zinc-500 text-xs sm:text-sm outline-none transition-all resize-none"
                />
              </div>

              {/* Status feedback */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-xl flex items-center gap-2 text-xs ${
                    isError
                      ? 'bg-red-500/20 text-red-200 border border-red-500/30'
                      : 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30'
                  }`}
                >
                  {isError ? (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors cursor-pointer text-xs sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2.5 rounded-xl gold-button text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving APK...</span>
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-3.5 h-3.5" />
                      <span>Upload & Set Live</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
