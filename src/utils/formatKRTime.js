const formatKRTime = (created_at) => {
  const date = new Date(created_at);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours < 12 ? '오전' : '오후';

  let formattedHours = hours;
  if (hours > 12) {
    formattedHours = hours - 12;
  } else if (hours === 0) {
    formattedHours = 12; 
  }

  const formattedTime = `${ampm} ${formattedHours}:${String(minutes).padStart(2, '0')}`;

  return formattedTime;
};

export default formatKRTime;