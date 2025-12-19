
import React from 'react';
import { Language } from '../types';
import Plans from '../components/Plans';
import PriceComparisonTable from '../components/PriceComparisonTable';
import { WEEKLY_MENU, ADDONS, SUBSCRIPTION_FORM_URL } from '../constants';
import { trackEvent } from '../services/analytics';

interface PlansPageProps {
  lang: Language;
}

const PlansPage: React.FC<PlansPageProps> = ({ lang }) => {
  const isBn = lang === 'bn';

  return (
    <div className="min-h-screen bg-[#FFF8E1] dark:bg-slate-950 pt-24 pb-16 transition-colors duration-500">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16 text-center animate-on-scroll relative z-10">
         <span className="inline-block py-1 px-3 rounded-full bg-orange-100 dark:bg-slate-800 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-8 border border-orange-200 dark:border-slate-700">
            {isBn ? 'স্বচ্ছ মূল্য নীতি' : 'Transparent Pricing'}
         </span>
         
         <div className="relative inline-block mb-6">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white font-bengali-support leading-tight relative z-10 mx-4">
              {isBn ? 'মূল্য তালিকা' : 'Pricing & Plans'}
            </h1>
            
            {/* Annotation: Starts @ 1950 */}
            <div className="hidden md:flex absolute top-1/2 -left-32 -translate-y-1/2 flex-col items-center animate-on-scroll delay-100">
               <div className="border-2 border-dashed border-blue-400/50 rounded-xl w-24 h-12 mb-1"></div>
               <span className="text-blue-500 font-bold text-sm">Starts @ Rs.1950</span>
            </div>

            {/* Annotation: Starts @ 3300 */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center animate-on-scroll delay-200 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
               <div className="border-2 border-dashed border-blue-400/50 rounded-xl w-32 h-16 mb-1 scale-110"></div>
               <span className="text-blue-500 font-bold text-sm translate-y-8">Starts @ Rs.3300</span>
            </div>

            {/* Annotation: Starts @ 2850 */}
            <div className="hidden md:flex absolute top-1/2 -right-32 -translate-y-1/2 flex-col items-center animate-on-scroll delay-300">
               <div className="border-2 border-dashed border-blue-400/50 rounded-xl w-24 h-12 mb-1"></div>
               <span className="text-blue-500 font-bold text-sm">Starts @ Rs.2850</span>
            </div>
         </div>

         <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mt-4">
           {isBn 
             ? 'কোনো লুকানো খরচ নেই। কোনো প্যাকিং চার্জ নেই। একদম বাড়ির মতো খাবার, সাধ্যের মধ্যে।' 
             : 'Simple, affordable, and honest. No hidden delivery fees or packing charges. Just good food.'}
         </p>
      </div>

      {/* Price Comparison Table (Market Disruption) */}
      <div className="container mx-auto px-4 mb-20">
        <PriceComparisonTable lang={lang} />
      </div>

      {/* Subscription Plans Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest text-center">{isBn ? 'মাসিক সাবস্ক্রিপশন' : 'Monthly Subscriptions'}</h2>
           <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </div>
        <Plans lang={lang} />
      </div>

      {/* A La Carte Rate Card (The "Data in Table" Implementation) */}
      <div className="container mx-auto px-4 mb-20 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
             <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-bengali-support mb-2">
                   {isBn ? 'আলাদা আইটেম (রেট চার্ট)' : 'A La Carte Rate Card'}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                   {isBn ? 'আপনার মিল কাস্টমাইজ করতে বা অতিরিক্ত আইটেম নিতে।' : 'Customize your meal or order individual items.'}
                </p>
             </div>
             <div className="text-sm font-bold text-[#D32F2F] bg-red-50 dark:bg-red-900/10 px-4 py-2 rounded-lg border border-red-100 dark:border-red-900/30">
                {isBn ? '📞 অর্ডারের জন্য কল করুন' : '📞 Call to Order Extras'}
             </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                         <th className="p-5 font-bold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider w-1/2">
                            {isBn ? 'আইটেমের নাম' : 'Item Name'}
                         </th>
                         <th className="p-5 font-bold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider text-right">
                            {isBn ? 'দাম (₹)' : 'Price (₹)'}
                         </th>
                         <th className="p-5 font-bold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider text-right">
                            {isBn ? 'ইউনিট' : 'Unit'}
                         </th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {ADDONS.map((addon, index) => (
                         <tr 
                           key={addon.id} 
                           className={`group transition-colors hover:bg-orange-50 dark:hover:bg-slate-800/50 ${index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#FAFAFA] dark:bg-slate-900/50'}`}
                         >
                            <td className="p-5">
                               <div className="font-bold text-slate-800 dark:text-slate-200 text-base md:text-lg font-bengali-support group-hover:text-[#D32F2F] transition-colors">
                                  {isBn ? addon.nameBn : addon.name}
                               </div>
                            </td>
                            <td className="p-5 text-right">
                               <span className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black px-3 py-1 rounded-md text-lg group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                                  ₹{addon.price}
                               </span>
                            </td>
                            <td className="p-5 text-right">
                               <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                  per {isBn ? addon.unitBn : addon.unit}
                               </span>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
             <div className="bg-slate-50 dark:bg-slate-800 p-4 text-center text-xs text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-700">
                * Prices are subject to change based on market rates. Last updated: October 2024.
             </div>
          </div>
        </div>
      </div>

      {/* Weekly Menu Section */}
      <div className="container mx-auto px-4 mb-20 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 font-bengali-support">
               {isBn ? '📅 এই সপ্তাহের মেনু' : '📅 Weekly Menu Calendar'}
             </h2>
             <p className="text-slate-600 dark:text-slate-400">
               {isBn ? 'প্রতিদিন নতুন স্বাদ। একঘেয়েমি কাটান।' : 'New tastes every day. Break the monotony.'}
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {WEEKLY_MENU.map((day, idx) => (
               <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-orange-200 dark:hover:border-slate-700 transition-all duration-300 group">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                     <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#D32F2F] transition-colors font-bengali-support">
                        {isBn ? day.dayBn : day.day}
                     </h3>
                     <span className="text-xs font-bold text-slate-400 uppercase">
                        Day {idx + 1}
                     </span>
                  </div>
                  <div className="space-y-4">
                     <div>
                        <div className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">
                           {isBn ? 'লাঞ্চ' : 'Lunch'}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-bengali-support leading-relaxed">
                           {isBn ? day.lunchBn : day.lunch}
                        </p>
                     </div>
                     <div>
                        <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">
                           {isBn ? 'ডিনার' : 'Dinner'}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-bengali-support leading-relaxed">
                           {isBn ? day.dinnerBn : day.dinner}
                        </p>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Live Pricing Sheet Embed */}
      <div className="container mx-auto px-4 mb-20 animate-on-scroll">
         <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="bg-slate-800 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
               <div>
                  <h3 className="text-white font-bold flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     {isBn ? 'লাইভ ডাটাবেস' : 'Live Database View'}
                  </h3>
                  <p className="text-slate-400 text-xs">Directly from our Kitchen Ops Sheet</p>
               </div>
               <a 
                 href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTgX6koRtAME3B3OwxJnSCwhLwjpsQ2MjA84xoH4mey2lS0p0J4Ob9SlKVm8W8hJdSh3xEtZVKwKYF3/pubhtml" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
               >
                 Open Full Sheet ↗
               </a>
            </div>
            <div className="relative w-full h-[500px] bg-white">
               <iframe 
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTgX6koRtAME3B3OwxJnSCwhLwjpsQ2MjA84xoH4mey2lS0p0J4Ob9SlKVm8W8hJdSh3xEtZVKwKYF3/pubhtml?gid=0&single=true&widget=true&headers=false"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  title="Bhuk Foods Live Pricing"
               ></iframe>
            </div>
         </div>
      </div>

      {/* Corporate / Bulk Orders CTA */}
      <div className="container mx-auto px-4 animate-on-scroll">
         <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-bold mb-6 font-bengali-support">
                 {isBn ? 'বিয়ে বাড়ি বা অনুষ্ঠানের অর্ডার?' : 'Hosting an Event or Running an Office?'}
               </h2>
               <p className="text-lg md:text-xl text-red-100 mb-10 leading-relaxed">
                 {isBn 
                   ? 'আমরা ক্যাটারিং সার্ভিসও দিয়ে থাকি। সেরা দামে সেরা মানের খাবার। আজই কোটেশন নিন।' 
                   : 'We offer bulk discounts for corporate lunches and small events. Get premium Bengali catering at street prices.'}
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={SUBSCRIPTION_FORM_URL}
                    onClick={() => trackEvent('bulk_order_click')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#D32F2F] font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  >
                    {isBn ? 'বাল্ক অর্ডার বুক করুন' : 'Book Bulk Order'}
                  </a>
                  <a 
                    href="tel:+917595923777"
                    className="bg-[#9c1616] text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg border border-white/20 hover:bg-[#851212]"
                  >
                    📞 +91 75959 23777
                  </a>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default PlansPage;
