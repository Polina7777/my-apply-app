export interface ColorCardProps {
  color: string;
  id: number;
  name: string;
  // pantone_value: string;
  year: number;
  getColorFilterById: () => void;
}
