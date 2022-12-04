import { TextInput, Checkbox, Button, Group, Box, SimpleGrid, Textarea, Grid } from '@mantine/core';
import { useForm } from '@mantine/form';
const Contact = ({user}:any) => {

    const form = useForm({
        initialValues: {
          email: '',
          termsOfService: false,
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });
      if(!user){
        return null;
      };
    return(
  <div style={{padding:30,borderTop:'1px solid #333'}}>
    <h2>Contact</h2>
      <SimpleGrid cols={2}>
            <div>
              <Box style={{padding:'0 10px'}} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
<SimpleGrid cols={2} style={{margin:'10px 0'}}>
<TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

<TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
  
</SimpleGrid>
<Textarea />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
        </div>
            <div style={{margin:'20px 50px'}}>
            <Grid>
   {user && user.map((val:any) => {
    return(
    <> 
     <Grid.Col span={4}>Address</Grid.Col>
    <Grid.Col span={8}>{val.address}</Grid.Col>
    <Grid.Col span={4}>Phone</Grid.Col>
    <Grid.Col span={8}>{val.phone}</Grid.Col>
    <Grid.Col span={4}>Email</Grid.Col>
    <Grid.Col span={8}>{val.email}</Grid.Col>
    </>
    )
   })}
</Grid>
            </div>
    </SimpleGrid>
  </div>
    )
}
export default Contact;