const CLOUD_NAME = "rl4g9osv";

export const cloudinaryImg = (publicId, width = 400, height = 400) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},h_${height},c_fill,g_face,q_auto,f_auto/${publicId}`;

export const cloudinaryGalleryImg = (publicId, width = 600) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},q_auto,f_auto/${publicId}`;