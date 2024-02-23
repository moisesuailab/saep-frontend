import { Col, Row, Form, Input, Button, message } from "antd"
import { useAuth } from "../../shared/hooks/useAuth"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(auth.token)return navigate("/dashboard");
    }, [auth.token])   
    
    
    async function onFinish(values: {email: string, password: string}) {
        try {
            await auth.signin(values.email, values.password);
            navigate("/dashboard")
        } catch (error) {
            message.error('Invalid email or password')
        }
    }

    return (
        <Row justify="center" align='middle' style={{height: '100vh'}}>
            <Col span={12}>
                <Form name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}} onFinish={onFinish}>
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">Sign In</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}