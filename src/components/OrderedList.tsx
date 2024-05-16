

type OrderedListProps= {
    list: {
        id: number,
        first_desc: string,
        description: string,
    }[]
}

const OrderedList = (props: OrderedListProps) => {
    return (
        <ol>
            {props.list.map(instance => {
                return(
                    <li key={instance.id}><strong>{instance.first_desc}</strong> {instance.description}</li>
                )
            })}
        </ol>
    )
}

export default OrderedList;