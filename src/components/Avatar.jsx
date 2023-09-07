const Avatar = ({ src, size = 35, alt = "" }) => (
  <img
    src={src}
    alt={alt}
    style={{
      borderRadius: '50%',
      width: `${size}px`,
      height: size,
      objectFit: 'cover',
    }}
  />
);

export default Avatar;