import { ApkPackage } from '../types';

const DB_NAME = 'NaxalApkDatabase';
const STORE_NAME = 'apkFiles';
const DB_VERSION = 1;

export const OFFICIAL_MEDIAFIRE_URL = 'https://www.mediafire.com/file/4fmyzd9rgpjt8pw/NAXAL_BLOUSE_1.00_BETA_.apk/file';

export const DEFAULT_APK: ApkPackage = {
  id: 'default-naxal-v1',
  name: 'NAXAL BLOUSE BETA',
  filename: 'NAXAL_BLOUSE_1.00_BETA_.apk',
  version: 'v1.00 Beta',
  description: 'Official NAXALBLOUSE Android APK for browsing blouse designs, sarees, kurtis, kurtas, shirts, and jeans with WhatsApp ordering in Naxalbari, West Bengal.',
  releaseNotes: 'Official MediaFire Beta Release: Clothing design browsing across blouses, sarees, kurtis, kurtas, shirts, and jeans, detailed product views, WhatsApp-based ordering, customer order details, and delivery information for Naxalbari (PIN 734429).',
  fileSize: '18.4 MB',
  uploadDate: 'Official Release',
  downloadUrl: OFFICIAL_MEDIAFIRE_URL,
  isCustomUpload: false,
};

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getActiveApk(): Promise<ApkPackage> {
  try {
    const db = await openDb();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get('active_custom_apk');
      req.onsuccess = () => {
        if (req.result) {
          const item = req.result;
          let downloadUrl = DEFAULT_APK.downloadUrl;
          if (item.blob) {
            downloadUrl = URL.createObjectURL(item.blob);
          }
          resolve({
            id: item.id,
            name: item.name || DEFAULT_APK.name,
            filename: item.filename || 'naxal_debug_v1.apk',
            version: item.version || 'Debug v1',
            description: item.description || DEFAULT_APK.description,
            releaseNotes: item.releaseNotes || 'Uploaded custom APK release.',
            fileSize: item.fileSize || 'Custom Size',
            uploadDate: item.uploadDate || new Date().toLocaleDateString(),
            downloadUrl,
            isCustomUpload: true,
            blob: item.blob,
          });
        } else {
          resolve(DEFAULT_APK);
        }
      };
      req.onerror = () => resolve(DEFAULT_APK);
    });
  } catch (err) {
    console.warn('IndexedDB not accessible, defaulting to official APK', err);
    return DEFAULT_APK;
  }
}

export async function saveCustomApk(data: {
  file: File;
  name: string;
  filename: string;
  version: string;
  description: string;
  releaseNotes?: string;
}): Promise<ApkPackage> {
  const db = await openDb();
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const cleanFilename = data.filename.endsWith('.apk') ? data.filename : `${data.filename}.apk`;

  const item = {
    id: 'active_custom_apk',
    name: data.name.trim() || 'NAXAL BLOUSE BETA',
    filename: cleanFilename,
    version: data.version.trim() || 'Custom v1',
    description: data.description.trim() || 'Custom uploaded APK for NAXAL BLOUSE.',
    releaseNotes: data.releaseNotes || 'Uploaded via NAXAL web management console.',
    fileSize: formatBytes(data.file.size),
    uploadDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    blob: data.file,
  };

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.put(item);
    req.onsuccess = () => {
      const downloadUrl = URL.createObjectURL(item.blob);
      resolve({
        ...item,
        downloadUrl,
        isCustomUpload: true,
      });
    };
    req.onerror = () => reject(req.error);
  });
}

export async function deleteCustomApk(): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.delete('active_custom_apk');
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/**
 * Triggers a real browser download of the APK file.
 * Compatible with Chrome on Android and desktop browsers.
 */
export function triggerApkDownload(apk: ApkPackage) {
  if (apk.downloadUrl.startsWith('http://') || apk.downloadUrl.startsWith('https://')) {
    // Open MediaFire / external download page directly in a new tab
    const win = window.open(apk.downloadUrl, '_blank', 'noopener,noreferrer');
    if (!win) {
      // Fallback if popup blocker intercepted
      window.location.href = apk.downloadUrl;
    }
    return;
  }
  const link = document.createElement('a');
  link.href = apk.downloadUrl;
  link.setAttribute('download', apk.filename);
  link.setAttribute('target', '_blank');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
  }, 300);
}
