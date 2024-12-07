import styled from 'styled-components';

const StyledListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  background: white;
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem;
  opacity: 0.8;
  margin-top: 1vh;
  box-shadow: 2px 2px rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface ListItemProps<T> {
  item: T;
  renderItem: (item: T) => React.ReactNode;
}

export const ListItem = <T,>({ item, renderItem }: ListItemProps<T>) => {
  return <StyledListItem>{renderItem(item)}</StyledListItem>;
};
