const photos = [
    'carangueijo.jpeg',
    'lago.jpeg',
    'rio.jpeg'
];

let currentPhotoIndex = 0;

document.getElementById('nextButton').addEventListener('click', function() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    document.getElementById('photo').src = photos[currentPhotoIndex];
});
