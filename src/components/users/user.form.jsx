import { Button, Input, Form, Card } from "antd";
import { useState } from "react";

const UserForm = () => {
      const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");


      const handleOnClick = () => {
            console.log({ fullName, email, password, phoneNumber })
      }
      return (
            <div className="form-container">
                  <Card title="Create User" bordered={false} className="form-card">
                        <Form layout="vertical">
                              <Form.Item
                                    label="Full Name"
                                    name="fullName"
                                    rules={[{ required: true, message: "Please enter your full name!" }]}
                              >
                                    <Input onChange={(event) => setFullName(event.target.value)} value={fullName} placeholder="Enter full name" />
                              </Form.Item>

                              <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                          { required: true, message: "Please enter your email!" },
                                          { type: "email", message: "Please enter a valid email!" }
                                    ]}
                              >
                                    <Input onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Enter email" />
                              </Form.Item>

                              <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: "Please enter your password!" }]}
                              >
                                    <Input.Password onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Enter password" />
                              </Form.Item>

                              <Form.Item
                                    label="Phone Number"
                                    name="phoneNumber"
                                    rules={[{ required: true, message: "Please enter your phone number!" }]}
                              >
                                    <Input onChange={(event) => setPhoneNumber(event.target.value)} value={phoneNumber} placeholder="Enter phone number" />
                              </Form.Item>

                              <Form.Item>
                                    <Button onClick={handleOnClick} type="primary" htmlType="submit" block>
                                          Create User
                                    </Button>
                              </Form.Item>
                        </Form>
                  </Card>
            </div>
      );
};

export default UserForm;

