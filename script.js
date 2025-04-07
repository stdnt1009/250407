const songs = [
    {
        title: "Shape of You - Ed Sheeran",
        url: "JGwWNGJdvx8"
    },
    {
        title: "Blinding Lights - The Weeknd",
        url: "4NRXxoyepaQ"
    },
    {
        title: "Stay With Me - Calvin Harris",
        url: "kXYiU_JCYtU"
    },
    {
        title: "As It Was - Harry Styles",
        url: "H5v3Kku4y6Q"
    },
    {
        title: "About Damn Time - Lizzo",
        url: "c6ASQOw2hVw"
    },
    {
        title: "Break My Soul - Beyoncé",
        url: "sCQExhXgX0Q"
    },
    {
        title: "First Class - Jack Harlow",
        url: "vUTI4bPdlgE"
    },
    {
        title: "Running Up That Hill - Kate Bush",
        url: "wp43OdtAAkE"
    }
];

const songBtn = document.getElementById('songBtn');

songBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    
    Swal.fire({
        title: 'Today\'s Song',
        html: `
            <div class="mb-4">
                <h3 class="text-xl font-bold text-gray-800">${selectedSong.title}</h3>
            </div>
            <a href="https://www.youtube.com/watch?v=${selectedSong.url}" 
               target="_blank" 
               class="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition">
                YouTube에서 듣기
            </a>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        background: '#ffffff',
        backdrop: 'rgba(0,0,0,0.4)',
        customClass: {
            container: 'swal-container',
            popup: 'swal-popup rounded-xl',
            title: 'swal-title text-2xl font-bold text-gray-800',
            htmlContainer: 'swal-html text-gray-600',
            closeButton: 'swal-close text-gray-500 hover:text-gray-700'
        }
    });
});
