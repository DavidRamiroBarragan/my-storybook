import './MyLabel.css';

export interface MyLabelProps {
  /**
   * Texto que se mostrará en la etiqueta
   */
  label: string;
  /**
   * Tamaño de la etiqueta
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Color del botón
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Capitalizar todas las letras
   */
  allCaps?: boolean;

  /**
   * Color de la fuente
   */
  fontColor?: string;
}
export const MyLabel = ({
  allCaps,
  color = 'primary',
  fontColor,
  label = 'no label',
  size = 'normal',
}: MyLabelProps) => {
  const texto = !!allCaps ? label.toLocaleUpperCase() : label;
  return (
    <span
      className={['label', size, `text-${color}`].join(' ')}
      style={{ color: fontColor }}
    >
      {texto}
    </span>
  );
};
