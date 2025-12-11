/* ================================================================
   main.js - GÜNCEL KOD (DOMContentLoaded İle Güvenli)
   ================================================================ */

   document.addEventListener('DOMContentLoaded', () => {
    
    // Yılı güncelle
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    
    /* 1. VERİ KAYNAĞI (Category alanı eklendi) */
    const blogPosts = [
        {
            title: "The Gumroad Goldmine: How to Turn Your Skills Into Sellable Digital Products",
            description: "🚀 The Gumroad Goldmine Series — a 10-part guide to building your own passive income system using Gumroad, AI tools, and simple digital products.",
            image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-w6zCG1Ls16oDvlFW0Y3RA.png",
            url: "post.html",
            category: "Pasif Gelir" // YENİ ETİKET
        },
        {
            title: "Post",
            description: "Dark mode ve responsive tasarım yaparken dikkat edilmesi gerekenler.",
            image: "https://ornek-resim-sitesi.com/resim2.jpg", 
            url: "post.html",
            category: "Tasarım/Frontend" // YENİ ETİKET
        }
    ];

    /* 2. RENDER FONKSİYONU */
    const blogGrid = document.getElementById('blog-grid');
    const noDataMsg = document.getElementById('no-data-msg');

    function renderPosts(posts) {
        if (blogGrid) blogGrid.innerHTML = ''; 

        if (!posts || posts.length === 0) {
            if (noDataMsg) noDataMsg.classList.remove('hidden');
            return;
        }

        posts.forEach(post => {
            const fallbackImageHTML = `<div class='w-full h-full flex items-center justify-center text-gray-600 bg-gray-800'><i class='fa-solid fa-image text-3xl'></i></div>`;

            const imageHTML = post.image 
                ? `<img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                       onerror="this.parentElement.innerHTML='${fallbackImageHTML}'">` 
                : fallbackImageHTML;

            // Etiket (Badge) kodu: post.category varsa göster, yoksa boş bırak.
            const categoryBadge = post.category 
                ? `<span class="inline-block bg-accent/20 text-accent text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">${post.category}</span>` 
                : '';

            const cardHTML = `
                <article class="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 flex flex-col h-full">
                    
                    <div class="img-container relative w-full h-48 bg-gray-800 overflow-hidden">
                         ${imageHTML}
                         <div class="absolute top-4 right-4 bg-dark-bg/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full border border-dark-border text-white shadow-sm">
                            <i class="fa-solid fa-link mr-1 text-accent"></i> Kaynak
                         </div>
                    </div>

                    <div class="p-6 flex flex-col flex-grow">
                        
                        ${categoryBadge}

                        <h2 class="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                            ${post.title}
                        </h2>
                        
                        <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                            ${post.description}
                        </p>
                        
                        <div class="mt-auto pt-4 border-t border-dark-border/50">
                            <a href="${post.url}" class="inline-flex items-center text-sm font-semibold text-white hover:text-accent transition-all group-hover:translate-x-1">
                                Yazıyı Oku 
                                <i class="fa-solid fa-arrow-right-long ml-2"></i>
                            </a>
                        </div>
                    </div>
                </article>
            `;
            
            if (blogGrid) blogGrid.innerHTML += cardHTML;
        });
    }

    /* 3. BAŞLATMA */
    renderPosts(blogPosts);

}); // DOMContentLoaded sonu
