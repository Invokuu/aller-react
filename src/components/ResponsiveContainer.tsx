import './scss/ResponsiveContainer.scss';

interface ContainerProps {
    children: JSX.Element|JSX.Element[];
}

// This is just a container that changes size based on screen width
export function ResponsiveContainer(props: ContainerProps): JSX.Element {
    return (
        <div className="responsive-container">
            {props.children}
        </div>
    );
}