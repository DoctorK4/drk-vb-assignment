import formatNowtoString from "./formatNowtoString"

const formatMsgtoAdd = (inputValue, chatDataLength) => {
  const msgToAdd =  {
    "id": chatDataLength + 1,
    "user_id": 1,
    "user_name": "소개녀",
    "photo_url": "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
    "created_at": formatNowtoString(),
    "msg": {
        "mtype": "text",
        "content": inputValue,
      }
  };
  return msgToAdd;
};

export default formatMsgtoAdd;