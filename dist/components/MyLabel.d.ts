/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
