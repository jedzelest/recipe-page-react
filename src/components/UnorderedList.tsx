type UnorderedListProps = {
    list : {
        id: number,
        first_desc: string,
        description: string,
    }[]
    customClassName?: string,
}


const UnorderedList = (props: UnorderedListProps) => {
    return (
        <ul className="unorderedlist">
            {props.list.map(instance => {
                return (
                    <li key={instance.id}><span className={props.customClassName}>{instance.first_desc}</span> {instance.description}</li>
                )
            })}
        </ul>
    )
}

export default UnorderedList