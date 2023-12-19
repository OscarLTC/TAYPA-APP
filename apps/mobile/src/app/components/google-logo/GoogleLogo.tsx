import React from 'react';
import { Image } from 'react-native';

/* eslint-disable-next-line */
export interface GoogleLogoProps {}

export function GoogleLogo(props: GoogleLogoProps) {
  return (
    <Image
      source={require('./google-logo.png')} // Reemplaza 'logo-google.png' con el nombre de tu archivo de imagen
      style={{ width: 40, height: 41 }}
    />
  );
}

export default GoogleLogo;
