import React from 'react';
import { BsCameraVideo, BsCode, BsChat, BsLink45Deg } from 'react-icons/bs';
import { FaReact, FaNode, FaNetworkWired } from 'react-icons/fa';
import { SiWebrtc } from 'react-icons/si';

const iconMap = {
  video: BsCameraVideo,
  code: BsCode,
  chat: BsChat,
  link: BsLink45Deg,
  react: FaReact,
  node: FaNode,
  webrtc: SiWebrtc,
  websocket: FaNetworkWired, // Changed to use FaNetworkWired instead of SiWebsocket
};

function IconWrapper({ icon, size = 'medium', className = '' }) {
  const Icon = iconMap[icon];
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  if (!Icon) return null;

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Icon className="w-full h-full" />
    </div>
  );
}

export default IconWrapper;