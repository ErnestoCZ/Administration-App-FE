import styled from 'styled-components';

const StyledListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  background: white;
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem;
  opacity: 0.8;
  margin-top: 1vh;
`;

interface ListItemProps<T> {
  item: T;
  renderItem: (item: T) => React.ReactNode;
}

export const ListItem = <T,>({ item, renderItem }: ListItemProps<T>) => {
  return <StyledListItem>{renderItem(item)}</StyledListItem>;
};
