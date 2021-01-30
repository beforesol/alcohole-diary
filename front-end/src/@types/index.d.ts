interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> { }

declare module '*.scss';
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.svg' {
    const value: SvgrComponent;
    export default value;
}