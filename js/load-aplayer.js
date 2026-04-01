
document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.getElementById('tabs_aplayer_jp_an');
    const apjapanContainer = document.createElement('div');
    apjapanContainer.id = 'aplayer_music_jp'
    document.body.append(apjapanContainer)
    const ap1 = new APlayer({
        container: document.getElementById('aplayer_music_jp'),
        fixed: true,
        volume: 1,
        audio: [{
                name: 'いつも何度でも',
                author: '木村弓',
                url: '/musics/japan/always-with-me/always-with-me.mp3',
                cover: '/musics/japan/always-with-me/always-with-me.jpg',
            },
            {
                name: '身売り',
                author: 'ロス',
                url: '/musics/japan/miuri/miuri.mp3',
                cover: '/musics/japan/miuri/miuri.jpg',
            },
            {
                name: '死化粧',
                author: 'ロス',
                url: '/musics/japan/shinigeshou/shinigeshou.mp3',
                cover: '/musics/japan/shinigeshou/shinigeshou.jpg',
            },
            {
                name: 'Lemon',
                author: '米津玄師',
                url: '/musics/japan/lemon/lemon.mp3',
                cover: '/musics/japan/lemon/lemon.jpg',
            },
            {
                name: '『Ref:rain』',
                author: 'Aimer',
                url: '/musics/japan/aimer/aimer.mp3',
                cover: '/musics/japan/aimer/aimer.jpg',
            },
            {
                name: '夢と葉桜',
                author: '【初音ミク】',
                url: '/musics/japan/yume-to-hazakura/yume-to-hazakura.mp3',
                cover: '/musics/japan/yume-to-hazakura/yume-to-hazakura.jpg',
            },
            {
                name: '蛍',
                author: '藤田麻衣子',
                url: '/musics/japan/hotaru/hotaru.mp3',
                cover: '/musics/japan/hotaru/hotaru.jpg',
            },
            {
                name: 'シルエット',
                author: 'Kana-Boon',
                url: '/musics/japan/silhouette/silhouette.mp3',
                cover: '/musics/japan/silhouette/silhouette.jpg',
            },
            {
                name: '今夜はおやすみ 🌕 | 疲れた夜に聴きたい菩薩様のリラックスレゲエ🪷',
                author: 'Gokuraku Radio',
                url: 'https://github.com/haehansa/musics/raw/refs/heads/main/japan/bosatsu-sama/bosatsu-sama.mp3',
                cover: 'https://github.com/haehansa/musics/blob/main/japan/bosatsu-sama/bosatsu-sama.png?raw=true',
            },


        ]


    })

    const ap_anotherContainer = document.createElement('div');
    ap_anotherContainer.id = 'aplayer_music_an'
    document.body.append(ap_anotherContainer)
    const ap2 = new APlayer({
        container: document.getElementById('aplayer_music_an'),
        fixed: true,
        volume: 1,
        audio: [{
                name: 'Until I Found You',
                author: 'Stephen Sanchez · Em Beihold',
                url: '/musics/another/until-i-found-you/until-i-found-you.mp3',
                cover: '/musics/another/until-i-found-you/until-i-found-you.png',
            },
            {
                name: '[S+R] Until I Found You',
                author: 'Stephen Sanchez · Em Beihold',
                url: '/musics/another/until-i-found-you-slowed/until-i-found-you-slowed.mp3',
                cover: '/musics/another/until-i-found-you-slowed/until-i-found-you-slowed.jpg',
            },
            {
                name: 'A Thousand Years',
                author: 'Christina Perri',
                url: '/musics/another/a-thousand-years/a-thousand-years.mp3',
                cover: '/musics/another/a-thousand-years/a-thousand-years.jpg',
            },
            {
                name: 'A Time for Us',
                author: 'Andy Williams',
                url: '/musics/another/a-time-for-us/a-time-for-us.mp3',
                cover: '/musics/another/a-time-for-us/a-time-for-us.png',
            },
            {
                name: 'Forever',
                author: 'Stratovarius',
                url: '/musics/another/forever/forever.mp3',
                cover: '/musics/another/forever/forever.png',
            },
            {
                name: 'I Think They Call This Love',
                author: 'Elliot James Reay',
                url: '/musics/another/i-think-they-call-this-love/i-think-they-call-this-love.mp3',
                cover: '/musics/another/i-think-they-call-this-love/i-think-they-call-this-love.png',
            },
            {
                name: '后来',
                author: '刘若英',
                url: '/musics/another/后来/后来.mp3',
                cover: '/musics/another/后来/后来.jpg',
            },
            {
                name: '봄눈',
                author: '최인영',
                url: '/musics/another/spring-snow/spring-snow.mp3',
                cover: '/musics/another/spring-snow/spring-snow.jpg',
            },
            {
                name: 'Rain and Tears',
                author: '최인영',
                url: 'https://github.com/haehansa/musics/raw/refs/heads/main/greece/rain_and_tears/song.mp3',
                cover: 'https://github.com/haehansa/musics/blob/main/greece/rain_and_tears/image.png?raw=true',
            },

        ]
    })
    ap_anotherContainer.hidden = true;

    // document.getElementById('menu_player').onclick = function () {
    //     const options = document.getElementById('albums');
    //     // Kiểm tra xem menu có đang ẩn không
    //     if (options.classList.contains('hidden')) {
    //         options.classList.remove('hidden'); // Hiển thị menu
    //         options.style.display = 'block'; // Đặt display là block
    //     } else {
    //         options.classList.add('hidden'); // Ẩn menu
    //         options.style.display = 'none'; // Đặt display là none
    //     }
    // };

    // Xử lý lựa chọn khi nhấp vào các tùy chọn
    // document.querySelectorAll('.album').forEach(option => {
    //     option.onclick = function () {
    //         const selectedOption = this.getAttribute('data-player');
    //         // const infoDisplay = document.getElementById('infoDisplay');
    //         if (selectedOption === 'japan_collection') {
    //             apjapanContainer.hidden = false;
    //             ap_anotherContainer.hidden = true;
    //             const tab2 = document.querySelector('.tab_music_an_aplayer');
    //             tab2.classList.remove('active');

    //             const tab1 = document.querySelector('.tab_music_jp_aplayer');
    //             tab1.classList.add('active');
    //             const options = document.getElementById('albums');
    //         options.classList.add('hidden'); // Thêm lớp ẩn
    //         options.style.display = 'none'; // Đặt display là none
                
    //         } else if (selectedOption === 'another_collection') {
    //             apjapanContainer.hidden = true;
    //             ap_anotherContainer.hidden = false;
    //             const tab1 = document.querySelector('.tab_music_jp_aplayer');
    //             tab1.classList.remove('active');

    //             const tab2 = document.querySelector('.tab_music_an_aplayer');
    //             tab2.classList.add('active');
    //             const options = document.getElementById('albums');
    //         options.classList.add('hidden'); // Thêm lớp ẩn
    //         options.style.display = 'none'; // Đặt display là none
    //         }
    //         const options = document.getElementById('albums');
    //         options.classList.add('hidden'); // Thêm lớp ẩn
    //         options.style.display = 'none'; // Đặt display là none
    //     };
    // });
    document.querySelectorAll('.dropdown-content div').forEach(item => {
        item.addEventListener('click', function() {
            const player = this.getAttribute("data-player");
            const albumDetails = document.getElementById("albumDetails");
          

            // Tùy thuộc vào album đã chọn, bạn có thể thay đổi nội dung hiển thị
            if (player === "japan_collection") {
                           apjapanContainer.hidden = false;
                ap_anotherContainer.hidden = true;
                const tab2 = document.querySelector('.tab_music_an_aplayer');
                tab2.classList.remove('active');

                const tab1 = document.querySelector('.tab_music_jp_aplayer');
                tab1.classList.add('active');
                const options = document.getElementById('albums');
            } else if (player === "another_collection") {
                                apjapanContainer.hidden = true;
                ap_anotherContainer.hidden = false;
                const tab1 = document.querySelector('.tab_music_jp_aplayer');
                tab1.classList.remove('active');

                const tab2 = document.querySelector('.tab_music_an_aplayer');
                tab2.classList.add('active');
                const options = document.getElementById('albums');
            options.classList.add('hidden'); // Thêm lớp ẩn
            options.style.display = 'none'; // Đặt display là none
            }

            albumDetails.innerHTML = details;
            albumDetails.style.display = "block";
            document.getElementById("dropdownContent").style.display = "none"; // Ẩn menu sau khi chọn
        });
    });

    // Đóng menu khi nhấp ra ngoài
    window.onclick = function(event) {
        if (!event.target.matches('.music-dropdown')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                dropdowns[i].style.display = "none";
            }
        }
    }
})



function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    dropdownContent.classList.toggle("show");
}