import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Ruler, Sparkles, Gem, ShieldCheck, Clock, Layers, Award } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Scissors,
      title: 'Bespoke Neckline & Cutout Studio',
      desc: 'Explore and customize over 120+ designer neckline silhouettes including deep sweetheart, boat neck, halter, sheer illusion, keyhole, and traditional princess cut.',
      badge: 'Couture Silhouettes',
    },
    {
      icon: Ruler,
      title: '14-Point Precision Measurement Engine',
      desc: 'Say goodbye to ill-fitting blouses. Record exact shoulder slope, armhole circumference, bust apex distance, waist taper, and back depth with guided anatomical illustrations.',
      badge: 'Zero-Fitting Flaws',
    },
    {
      icon: Gem,
      title: 'Bridal Maggam & Zardosi Visualizer',
      desc: 'Preview intricate hand-embroidered bullion wire, kundan stonework, cutdana, mirror borders, and personalized wedding monogram latkans before stitching starts.',
      badge: 'Artisan Embroidery',
    },
    {
      icon: Layers,
      title: 'Saree & Fabric Drape Harmonizer',
      desc: 'Pair blouse patterns with Banarasi silk, Kanjivaram zari, Chanderi cotton, or delicate organza to calculate optimal lining, padding, and interlining stiffness.',
      badge: 'Fabric Synergy',
    },
    {
      icon: Clock,
      title: 'Master Tailor Live Progress',
      desc: 'Track your custom garment in real time across four artisanal stages: fabric cutting, hand embroidery, master stitching, and final trial readiness.',
      badge: 'Transparent Craft',
    },
    {
      icon: ShieldCheck,
      title: 'Safe Offline Measurement Vault',
      desc: 'All sensitive customer measurement profiles and custom designs are stored safely on your device with zero cloud tracking and full export capability.',
      badge: '100% Private',
    },
  ];

  return (
    <section id="features-section" className="py-8 sm:py-14 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
            <Award className="w-3.5 h-3.5" />
            <span>Built for Boutiques, Brides & Designers</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text">
            NAXAL BLOUSE App Features
          </h2>
          <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Engineered exclusively for Indian haute couture. From bridal bespoke creations to daily handloom elegance, experience the future of tailored craftsmanship.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="apple-glass-card rounded-2xl sm:rounded-3xl p-6 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group hover:shadow-amber-500/10 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/80 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-zinc-100 mb-2 group-hover:text-amber-200 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-amber-400/80 font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>Available in NAXAL BLOUSE BETA</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specifications Strip */}
        <div className="apple-glass rounded-2xl p-5 sm:p-6 border border-amber-500/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-amber-300">120+</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Neckline Silhouettes</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-amber-300">14 Points</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Precision Measurement</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-amber-300">0 Ads</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Clean Pure Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-amber-300">Offline Ready</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Tailor Studio Mode</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
