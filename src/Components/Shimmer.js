export default function Shimmer(props){

    const {width, height} = props;
    return <div className={width ? 'shimmer-2': 'shimmer-container'} style={ width? {
        'width': `${width}px`,
        'height': `${height}px`,
        'margin': '10px auto',
    } : {}}>Loading data....</div>
}