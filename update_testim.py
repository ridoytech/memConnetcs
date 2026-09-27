import os

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, l in enumerate(lines):
    if '<!-- Testimonials Section -->' in l:
        start_idx = i
        break

for i in range(start_idx + 1, len(lines)):
    if '<!-- Stats Section -->' in lines[i]:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_html = """    <!-- Testimonials Section -->
    <section id="testimonials" class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-3 mb-6">
            <div class="w-6 h-0.5 bg-[#ff4a22]"></div>
            <h2 class="text-sm font-bold text-[#ff4a22] uppercase tracking-[0.2em]">Testimonials</h2>
          </div>
          <h3 class="text-5xl font-black text-slate-900 mb-6 tracking-tight">What clients <span class="text-[#ff4a22]">say</span></h3>
          <p class="text-slate-500 text-lg font-serif">
            Law firms, care providers and UK businesses on working with us.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <!-- Card 1 -->
          <div class="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] flex flex-col h-full hover:shadow-[0_20px_50px_-12px_rgba(255,74,34,0.15)] hover:-translate-y-1 transition-all duration-300">
            <div class="flex justify-between items-start mb-6">
              <div class="text-[#ff4a22] text-6xl font-serif font-black leading-none h-8 tracking-tighter">"</div>
              <div class="px-4 py-1.5 rounded-full border border-[#ff4a22]/30 text-[#ff4a22] text-xs font-bold bg-[#ff4a22]/5">Law Firms</div>
            </div>
            <p class="text-slate-700 text-[1.1rem] leading-loose mb-10 font-serif flex-grow">
              Bookings used to sit in the inbox. Now clients pick a time on the site and we see it straight away. It looks professional and it is easy for the team to use.
            </p>
            <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
              <div class="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 shrink-0"></div>
              <div>
                <h5 class="text-slate-900 font-bold text-sm">Sonjoy Kumar Roy</h5>
                <p class="text-slate-500 text-xs">Director, Stonebridge Legal Solutions</p>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] flex flex-col h-full hover:shadow-[0_20px_50px_-12px_rgba(255,74,34,0.15)] hover:-translate-y-1 transition-all duration-300">
            <div class="flex justify-between items-start mb-6">
              <div class="text-[#ff4a22] text-6xl font-serif font-black leading-none h-8 tracking-tighter">"</div>
              <div class="px-4 py-1.5 rounded-full border border-[#ff4a22]/30 text-[#ff4a22] text-xs font-bold bg-[#ff4a22]/5">Client Review</div>
            </div>
            <p class="text-slate-700 text-[1.1rem] leading-loose mb-10 font-serif flex-grow">
              We needed one home for all our companies. People now find Education, Tech and Recruitment without getting lost. They listened, and they were quick.
            </p>
            <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
              <div class="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 shrink-0"></div>
              <div>
                <h5 class="text-slate-900 font-bold text-sm">Umma Marzan Monty</h5>
                <p class="text-slate-500 text-xs">Director, Mountenna Ltd</p>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] flex flex-col h-full hover:shadow-[0_20px_50px_-12px_rgba(255,74,34,0.15)] hover:-translate-y-1 transition-all duration-300">
            <div class="flex justify-between items-start mb-6">
              <div class="text-[#ff4a22] text-6xl font-serif font-black leading-none h-8 tracking-tighter">"</div>
              <div class="px-4 py-1.5 rounded-full border border-[#ff4a22]/30 text-[#ff4a22] text-xs font-bold bg-[#ff4a22]/5">Client Review</div>
            </div>
            <p class="text-slate-700 text-[1.1rem] leading-loose mb-10 font-serif flex-grow">
              We used to sort CVs by hand. Now every application sits in one place and we can see who applied. It is simple, and it saves us hours each week.
            </p>
            <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
              <div class="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 shrink-0"></div>
              <div>
                <h5 class="text-slate-900 font-bold text-sm">Umma Marzan Monty</h5>
                <p class="text-slate-500 text-xs">Director, Mountenna Ltd</p>
              </div>
            </div>
          </div>

        </div>
        
        <!-- Slider Navigation -->
        <div class="flex justify-center items-center gap-6">
          <button class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-800 hover:text-slate-800 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </button>
          
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-2.5 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 transition-colors"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 transition-colors"></div>
            <div class="w-5 h-2.5 rounded-full bg-[#ff4a22] cursor-pointer"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 transition-colors"></div>
          </div>
          
          <button class="w-12 h-12 rounded-full border-2 border-[#ff4a22] flex items-center justify-center text-slate-800 hover:bg-[#ff4a22]/5 transition-colors shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </div>
    </section>
"""
    lines = lines[:start_idx] + [new_html] + lines[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Updated successfully.')
else:
    print('Could not find tags')
