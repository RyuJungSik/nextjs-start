import { Button, Checkbox, Divider, Form, Header, List } from "semantic-ui-react";

export default function about() {
    return (
        <div>
            <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                회사 소개
            </Header>
            <Divider />
            <List>
                <List.Item>
                    <List.Icon name="users" />
                    <List.Content>무야호</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>seoul</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>xvbc@naver.com</List.Content>
                </List.Item>
            </List>
            <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                문의사항
            </Header>
            <Divider />
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.TextArea label='About' placeholder='Tell me' />
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>


        </div>
    )
}
