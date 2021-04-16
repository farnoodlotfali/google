const Avatar = ({ url, className }) => {
  return (
    // <div>
    <img
      className={`${className} h-10 cursor-pointer  transition duration-150 transform hover:scale-110 rounded-full
      `}
      loading="lazy"
      src={url}
      alt="profile photo"
    />
    // </div>
  );
};

export default Avatar;
