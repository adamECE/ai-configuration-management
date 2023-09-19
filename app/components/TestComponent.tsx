export default function TestComponent({isVisible} : {
    isVisible: boolean
}) {
    return (
        <div>
            {isVisible && <h1>This is working</h1>}
        </div>
    )
}
