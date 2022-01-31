const artistes = [
  {
    name: 'Pause Flow',
    style: 'Rap',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque earum rem consequuntur blanditiis',
    picture: 'img/singers/pause.jpg',
  },
  {
    name: 'Don Big',
    style: 'Rap',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque earum rem consequuntur blanditiis',
    picture: 'img/singers/don_big.jpg',
  },
  {
    name: 'Amine Kamal',
    style: 'Fusion',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque earum rem consequuntur blanditiis',
    picture: 'img/singers/amin_kamal.jpg',
  },
  {
    name: 'Betwinatna',
    style: 'Rock',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque earum rem consequuntur blanditiis',
    picture: 'img/singers/betwinatna.jpg',
  },
  {
    name: 'Hoba Hoba Spirit',
    style: 'Rock',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque earum rem consequuntur blanditiis',
    picture: 'img/singers/hoba_hoba_spirit.jpg',
  },
];

const participantBtn = document.createElement('button');
participantBtn.classList.add('participants_btn');
participantBtn.setAttribute('type', 'button');
participantBtn.innerHTML = 'MORE <i class="fa fa-arrow-down"></i>';
participantBtn.addEventListener('click', () => {
  document.querySelector('.participants_section').innerHTML = '';
  for (let i = 0; i < artistes.length; i++) {
    const participant = document.createElement('article');
    const participantImg = document.createElement('div');
    const imageDots = document.createElement('img');
    const participantPicture = document.createElement('img');
    const participantInfo = document.createElement('div');
    const participantName = document.createElement('h3');
    const participantStyle = document.createElement('h4');
    const hr = document.createElement('hr');
    const participantAbout = document.createElement('p');
    participant.classList.add('participant');
    participantImg.classList.add('participant_img');
    imageDots.classList.add('participant_dots');
    imageDots.setAttribute('src', 'img/image_dots.svg');
    imageDots.setAttribute('alt', 'dots');
    participantPicture.classList.add('participant_picture');
    participantPicture.setAttribute('src', artistes[i].picture);
    participantPicture.setAttribute('alt', 'singer_picture');
    participantInfo.classList.add('participant_info');
    participantName.classList.add('participant_name');
    participantName.textContent = artistes[i].name;
    participantStyle.classList.add('participant_style');
    participantStyle.textContent = artistes[i].style;
    participantAbout.classList.add('participant_about');
    participantAbout.textContent = artistes[i].about;

    participantImg.append(imageDots, participantPicture);
    participantInfo.append(participantName, participantStyle, hr, participantAbout);
    participant.append(participantImg, participantInfo);

    document.querySelector('.participants_section').append(participant);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 2; i++) {
    const participant = document.createElement('article');
    const participantImg = document.createElement('div');
    const imageDots = document.createElement('img');
    const participantPicture = document.createElement('img');
    const participantInfo = document.createElement('div');
    const participantName = document.createElement('h3');
    const participantStyle = document.createElement('h4');
    const hr = document.createElement('hr');
    const participantAbout = document.createElement('p');
    participant.classList.add('participant');
    participantImg.classList.add('participant_img');
    imageDots.classList.add('participant_dots');
    imageDots.setAttribute('src', 'img/image_dots.svg');
    imageDots.setAttribute('alt', 'dots');
    participantPicture.classList.add('participant_picture');
    participantPicture.setAttribute('src', artistes[i].picture);
    participantPicture.setAttribute('alt', 'singer_picture');
    participantInfo.classList.add('participant_info');
    participantName.classList.add('participant_name');
    participantName.textContent = artistes[i].name;
    participantStyle.classList.add('participant_style');
    participantStyle.textContent = artistes[i].style;
    participantAbout.classList.add('participant_about');
    participantAbout.textContent = artistes[i].about;

    participantImg.append(imageDots, participantPicture);
    participantInfo.append(participantName, participantStyle, hr, participantAbout);
    participant.append(participantImg, participantInfo);

    document.querySelector('.participants_section').append(participant);
  }

  document.querySelector('.participants_section').append(participantBtn);
});
