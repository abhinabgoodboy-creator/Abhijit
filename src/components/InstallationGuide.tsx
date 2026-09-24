import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  ShieldAlert,
  Download,
  ExternalLink,
  CloudDownload,
  CheckCircle2,
  Languages,
  AlertCircle,
  HardDrive,
  Copy,
  Check,
  Globe,
} from 'lucide-react';
import { Language } from '../types';
import { OFFICIAL_MEDIAFIRE_URL } from '../utils/apkStorage';

export const InstallationGuide: React.FC = () => {
  const [activeLang, setActiveLang] = useState<Language>('hi');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(OFFICIAL_MEDIAFIRE_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const guideContent = {
    hi: {
      langName: 'हिंदी',
      title: '📱 MediaFire से APK Download & Install कैसे करें',
      badge: 'आधिकारिक MediaFire क्लाउड गाइड',
      text: 'ऊपर दिए गए "Download App" बटन पर क्लिक करें। आप सीधे हमारे आधिकारिक MediaFire डाउनलोड पेज (NAXAL_BLOUSE_1.00_BETA_.apk) पर रीडायरेक्ट हो जाएंगे। MediaFire पेज पर दिए गए बड़े नीले रंग के "DOWNLOAD" बटन पर टैप करें। फ़ाइल डाउनलोड होते ही Chrome के 3 डॉट्स (⋮) → Downloads में जाकर APK फ़ाइल पर क्लिक करें और ऐप इंस्टॉल करें।',
      warning: 'APK केवल हमारे आधिकारिक MediaFire लिंक (NAXAL_BLOUSE_1.00_BETA_.apk) से ही डाउनलोड करें। किसी अज्ञात या तीसरे पक्ष की वेबसाइट से फ़ाइल कभी डाउनलोड न करें।',
      steps: [
        {
          num: '1',
          title: 'Download App पर क्लिक करें',
          subtitle: 'MediaFire पर रीडायरेक्ट',
          desc: 'वेबसाइट पर "Download App" बटन दबाएं। यह आपको सीधे MediaFire के आधिकारिक एवं सुरक्षित डाउनलोड पेज पर ले जाएगा।',
          actionHint: 'Direct Link to MediaFire',
          icon: ExternalLink,
        },
        {
          num: '2',
          title: 'नीले DOWNLOAD बटन पर टैप करें',
          subtitle: 'MediaFire डाउनलोड शुरू करें',
          desc: 'MediaFire पेज खुलने पर बड़े नीले "DOWNLOAD" (18.4 MB) बटन पर टैप करें। ब्राउज़र में डाउनलोडिंग शुरू हो जाएगी।',
          actionHint: 'Press Blue Download Button',
          icon: CloudDownload,
        },
        {
          num: '3',
          title: '"Download anyway" चुनें',
          subtitle: 'Chrome सुरक्षा पुष्टि',
          desc: 'यदि Chrome "File might be harmful" चेतावनी दिखाए, तो घबराएं नहीं। "Download anyway" (जारी रखें) पर टैप करें।',
          actionHint: 'Tap "Download anyway"',
          icon: AlertCircle,
        },
        {
          num: '4',
          title: 'फ़ाइल खोलें और Install करें',
          subtitle: 'Chrome Downloads & Setup',
          desc: 'डाउनलोड पूरा होने पर Chrome के (⋮) → Downloads में जाकर NAXAL_BLOUSE_1.00_BETA_.apk पर टैप करें और Install दबाएं।',
          actionHint: 'Open & Tap Install',
          icon: CheckCircle2,
        },
      ],
      quickMirrorText: 'आधिकारिक MediaFire होस्टिंग लिंक',
      openButton: 'MediaFire लिंक खोलें',
    },
    en: {
      langName: 'English',
      title: '📱 How to Download from MediaFire & Install APK',
      badge: 'Official MediaFire Cloud Guide',
      text: 'Click the "Download App" button on this portal. You will be redirected directly to our verified MediaFire download page for NAXAL_BLOUSE_1.00_BETA_.apk. On the MediaFire page, tap the prominent blue "DOWNLOAD" button. Once downloading finishes, go to Chrome 3 dots (⋮) → Downloads, tap the APK package, and complete installation.',
      warning: 'Download the APK only through our verified MediaFire link (NAXAL_BLOUSE_1.00_BETA_.apk). Never download or install packages from unauthorized or unknown third-party websites.',
      steps: [
        {
          num: '1',
          title: 'Click "Download App"',
          subtitle: 'Redirect to MediaFire',
          desc: 'Tap the Download App button on our site. You will be seamlessly redirected to the official MediaFire cloud repository.',
          actionHint: 'Direct Link to MediaFire',
          icon: ExternalLink,
        },
        {
          num: '2',
          title: 'Tap Blue "DOWNLOAD" Button',
          subtitle: 'Start file transfer',
          desc: 'On the MediaFire webpage, locate and press the large blue "DOWNLOAD" (18.4 MB) button to begin the download.',
          actionHint: 'Press Blue Download Button',
          icon: CloudDownload,
        },
        {
          num: '3',
          title: 'Confirm "Download anyway"',
          subtitle: 'Chrome safety check',
          desc: 'If Android Chrome displays the prompt "File might be harmful", tap "Download anyway" to proceed safely.',
          actionHint: 'Tap "Download anyway"',
          icon: AlertCircle,
        },
        {
          num: '4',
          title: 'Open File & Tap Install',
          subtitle: 'Chrome Downloads & Setup',
          desc: 'Go to Chrome menu (⋮) → Downloads, select NAXAL_BLOUSE_1.00_BETA_.apk, enable unknown sources if asked, and tap Install.',
          actionHint: 'Open & Tap Install',
          icon: CheckCircle2,
        },
      ],
      quickMirrorText: 'Official MediaFire Hosted Package',
      openButton: 'Open MediaFire Page',
    },
    bn: {
      langName: 'বাংলা',
      title: '📱 MediaFire থেকে APK Download ও Install করার নিয়ম',
      badge: 'অফিসিয়াল MediaFire ক্লাউড গাইড',
      text: 'ওয়েবসাইটে "Download App" বাটনে ক্লিক করুন। এটি আপনাকে সরাসরি আমাদের অফিসিয়াল MediaFire ডাউনলোড পেজে (NAXAL_BLOUSE_1.00_BETA_.apk) নিয়ে যাবে। সেখানে বড় নীল রঙের "DOWNLOAD" বাটনে চাপ দিন। ডাউনলোড শেষ হলে Chrome ব্রাউজারের ৩টি ডট (⋮) → Downloads-এ গিয়ে APK ফাইলে ট্যাপ করে Install সম্পন্ন করুন।',
      warning: 'APK শুধুমাত্র আমাদের অফিসিয়াল MediaFire লিংক (NAXAL_BLOUSE_1.00_BETA_.apk) থেকেই ডাউনলোড করুন। কোনো অপরিচিত বা অজানা ওয়েবসাইট থেকে APK ফাইল ডাউনলোড করবেন না।',
      steps: [
        {
          num: '1',
          title: 'Download App-এ ক্লিক করুন',
          subtitle: 'MediaFire-এ রিডাইরেক্ট',
          desc: 'ওয়েবসাইটে "Download App" বাটনে চাপ দিন। আপনি সরাসরি MediaFire-এর সুরক্ষিত ডাউনলোড পেজে পৌঁছে যাবেন।',
          actionHint: 'Direct Link to MediaFire',
          icon: ExternalLink,
        },
        {
          num: '2',
          title: 'নীল DOWNLOAD বাটনে চাপুন',
          subtitle: 'ডাউনলোড শুরু করুন',
          desc: 'MediaFire পেজ খুললে বড় নীল রঙের "DOWNLOAD" (18.4 MB) বাটনে ট্যাপ করুন। সঙ্গে সঙ্গে ডাউনলোড শুরু হবে।',
          actionHint: 'Press Blue Download Button',
          icon: CloudDownload,
        },
        {
          num: '3',
          title: '"Download anyway" সিলেক্ট করুন',
          subtitle: 'নিরাপত্তা বার্তা নিশ্চিত করুন',
          desc: 'Chrome ব্রাউজারে "File might be harmful" সতর্কতা এলে নির্ভয়ে "Download anyway" অপশনটি সিলেক্ট করুন।',
          actionHint: 'Tap "Download anyway"',
          icon: AlertCircle,
        },
        {
          num: '4',
          title: 'ফাইল ওপেন করে Install করুন',
          subtitle: 'Chrome Downloads ও ইনস্টলেশন',
          desc: 'ডাউনলোড শেষে Chrome মেনুর (⋮) → Downloads-এ গিয়ে NAXAL_BLOUSE_1.00_BETA_.apk-এ ট্যাপ করে Install চাপুন।',
          actionHint: 'Open & Tap Install',
          icon: CheckCircle2,
        },
      ],
      quickMirrorText: 'অফিসিয়াল MediaFire হোস্টিং লিংক',
      openButton: 'MediaFire পেজ খুলুন',
    },
  };

  const current = guideContent[activeLang];

  return (
    <section id="installation-guide" className="py-8 sm:py-12 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Card Header & Language Switcher */}
        <div className="apple-glass rounded-3xl p-6 sm:p-8 border border-amber-500/25 shadow-xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-mono font-medium border border-amber-500/20">
                <Globe className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
                {current.title}
              </h3>
            </div>

            {/* Language Switcher Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-black/60 border border-white/10 text-xs">
              <span className="px-2 text-zinc-500 hidden sm:flex items-center gap-1 text-[11px]">
                <Languages className="w-3 h-3" />
                <span>भाषा / Lang:</span>
              </span>
              {(['hi', 'en', 'bn'] as Language[]).map((langKey) => (
                <button
                  key={langKey}
                  onClick={() => setActiveLang(langKey)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    activeLang === langKey
                      ? 'bg-amber-400 text-black font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {guideContent[langKey].langName}
                </button>
              ))}
            </div>
          </div>

          {/* MediaFire Narrative Overview Box */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-500/5 border border-amber-400/20 text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
            <p>{current.text}</p>
          </div>

          {/* Visual Step by Step Cards with MediaFire Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {current.steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="apple-glass-card rounded-2xl p-4 border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold font-mono flex items-center justify-center">
                        {step.num}
                      </span>
                      <div className="p-1.5 rounded-lg bg-white/5 text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <h5 className="font-semibold text-zinc-100 text-xs sm:text-sm mb-1">
                      {step.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-zinc-400 leading-normal mb-3">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-amber-300/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{step.actionHint}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MediaFire Direct Link Box */}
          <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <CloudDownload className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-200">{current.quickMirrorText}</span>
                  <span className="px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">MediaFire Verified</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono truncate max-w-md">
                  NAXAL_BLOUSE_1.00_BETA_.apk (18.4 MB)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={handleCopyLink}
                className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy MediaFire Link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={OFFICIAL_MEDIAFIRE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{current.openButton}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Security Notice Warning */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-red-950/30 to-amber-950/40 border border-amber-500/40 text-xs sm:text-sm text-amber-100 flex items-start gap-3.5 shadow-inner">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0 mt-0.5 border border-amber-500/30">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="font-bold text-amber-300 uppercase tracking-wide text-xs flex items-center gap-1.5">
                <span>⚠️ Important Security Notice</span>
              </div>
              <p className="text-zinc-200 font-medium">
                {current.warning}
              </p>
              <div className="text-[11px] text-zinc-400 pt-1 font-mono">
                Official Package: NAXAL_BLOUSE_1.00_BETA_.apk • Verified by NAXAL Haute Couture Tailoring
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
