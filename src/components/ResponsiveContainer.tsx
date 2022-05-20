import './scss/ResponsiveContainer.scss';

interface ContainerProps {
    children: JSX.Element|JSX.Element[];
}

export function ResponsiveContainer(props: ContainerProps): JSX.Element {
    return (
        <div className="responsive-container">
            {props.children}
        </div>
    );
}