import Head from 'next/head';
import { Page, Text, Card, Note, Grid, User } from '@zeit-ui/react';

export default function Home() {
  return (
    <Page>
      <Head>
        <title>borales.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid.Container alignItems="center" justify="space-between">
        <Grid>
          <Text h1>Borales</Text>
        </Grid>
        <Grid>
          <User src="https://avatars2.githubusercontent.com/u/1118933?v=4" name="Alex Bordun">
            <User.Link href="https://github.com/borales">@borales</User.Link>
          </User>
        </Grid>
      </Grid.Container>

      <Card shadow>
        <Note type="error">Apologies, the page is in progress!</Note>
      </Card>
    </Page>
  );
}
