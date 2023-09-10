type Props = {
  name: string;
};

function DefaultPage({ name }: Props) {
  return (
    <h1>{name}</h1>
  );
}

export default DefaultPage;
