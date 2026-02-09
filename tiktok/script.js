
async function forceDownload(url, filename) {
    const container = document.getElementById('downloadProgressContainer');
    const fill = document.getElementById('progressFill');
    const percentText = document.getElementById('progressPercent');
    const sizeText = document.getElementById('progressSize');

    container.classList.remove('hidden');
    fill.style.width = '0%';
    percentText.innerText = '0%';
    sizeText.innerText = 'Memulai unduhan...';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Gagal mengunduh file');

        const reader = response.body.getReader();
        const contentLength = +response.headers.get('Content-Length');
        
        let receivedLength = 0; 
        let chunks = []; 

        while(true) {
            const {done, value} = await reader.read();
            if (done) break;

            chunks.push(value);
            receivedLength += value.length;

            if (contentLength) {
                const step = (receivedLength / contentLength) * 100;
                const totalMB = (contentLength / (1024 * 1024)).toFixed(1);
                const currentMB = (receivedLength / (1024 * 1024)).toFixed(1);
                
                fill.style.width = `${step}%`;
                percentText.innerText = `${Math.round(step)}%`;
                sizeText.innerText = `${currentMB} MB / ${totalMB} MB`;
            }
        }

        const blob = new Blob(chunks);
        const blobUrl = window.URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
        
        setTimeout(() => {
            container.classList.add('hidden');
        }, 2000);

    } catch (error) {
        console.error("Download error:", error);
        window.open(url, '_blank');
        container.classList.add('hidden');
    }
}

document.getElementById('downloadBtn').addEventListener('click', async () => {
    const url = document.getElementById('videoUrl').value.trim();
    const resultDiv = document.getElementById('result');
    const loader = document.getElementById('loader');
    const content = document.getElementById('videoContent');
    const photoAlbum = document.getElementById('photoAlbum');
    const photoList = document.getElementById('photoList');
    const saveBtn = document.getElementById('saveBtn');
    const musicBtn = document.getElementById('musicBtn');

    if (!url) return alert("Tempel link TikTok dulu!");

    resultDiv.classList.remove('hidden');
    loader.classList.remove('hidden');
    content.classList.add('hidden');
    photoAlbum.classList.add('hidden');
    photoList.innerHTML = '';

    try {
        const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
        const res = await response.json();

        if (res.code === 0) {
            const data = res.data;

            document.getElementById('videoTitle').innerText = data.title || "TikTok Media";
            document.getElementById('videoThumb').src = data.cover;

            musicBtn.onclick = () => forceDownload(data.music, `TikChl-Music-${data.id}.mp3`);

            if (data.images && data.images.length > 0) {
                saveBtn.classList.add('hidden'); 
                photoAlbum.classList.remove('hidden');
                document.getElementById('photoCount').innerText = `${data.images.length} Foto`;
                
                data.images.forEach((imgUrl, index) => {
                    const item = document.createElement('div');
                    item.className = 'photo-item';
                    item.innerHTML = `
                        <img src="${imgUrl}" alt="Slide ${index + 1}" loading="lazy">
                        <div class="photo-dl-overlay">
                            <button onclick="forceDownload('${imgUrl}', 'TikChl-Photo-${index + 1}.jpg')" class="btn-dl-small">
                                Unduh
                            </button>
                        </div>
                    `;
                    photoList.appendChild(item);
                });
            } else {
                saveBtn.classList.remove('hidden');
                saveBtn.onclick = () => forceDownload(data.play, `TikChl-Video-${data.id}.mp4`);
                photoAlbum.classList.add('hidden');
            }

            loader.classList.add('hidden');
            content.classList.remove('hidden');
            resultDiv.scrollIntoView({ behavior: 'smooth' });

        } else {
            alert("Gagal: Link tidak valid atau akun di-private.");
            resultDiv.classList.add('hidden');
        }
    } catch (error) {
        alert("Terjadi kesalahan koneksi ke server.");
        console.error(error);
        resultDiv.classList.add('hidden');
    }
});