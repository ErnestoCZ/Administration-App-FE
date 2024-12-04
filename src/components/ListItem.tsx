interface ListItemProps<T> {
  item: T;
  renderItem: (item: T) => JSX.Element;
}

export const ListItem = <T,>({ item, renderItem }: ListItemProps<T>) => {
  return <div>{renderItem(item)}</div>;
};
