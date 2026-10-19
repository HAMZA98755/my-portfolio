export default function ({title}: {title: string}) {
    return (
        <div className={` mb-10 w-fit ml-auto mr-auto px-10 py-5`}>
            <h2 className="text-5xl font-bold  text-center">
            {title}
            </h2>
        </div>
    )
}