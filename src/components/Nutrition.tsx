type NutritionProps = {
  list: {
    id: number;
    label: string;
    amount: string;
  }[];
};

const Nutrition = (props: NutritionProps) => {
  return (
    <div className="nutritionList">
      <ul>
        {props.list.map((instance) => {
          return (
            <li key={instance.id}>
              <strong>{instance.label}</strong>
              <span>{instance.amount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nutrition;
