export interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  text: string;
  openseaLink: string;
  tokenId: number;
}