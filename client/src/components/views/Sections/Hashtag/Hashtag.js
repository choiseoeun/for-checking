import React from 'react';
import { Tag, Input, Button } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { BsPlusCircle } from 'react-icons/bs';
import { withRouter } from 'react-router';

class RegisterPage4 extends React.Component {

    state = {
        tags: [],
        inputVisible: false,
        inputValue: '',
    };

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        // console.log(tags);
        this.setState({ tags });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        // console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => (this.input = input);

    forMap = tag => {
        const tagElem = (
            <Tag
                style={{
                    display: 'inline-block',
                    marginBottom: '5px',
                    borderRadius: '10px',
                    fontSize: '14px'
                }}
                closable
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag}
                style={{
                    display: 'inline-block'
                }}
            >
                {tagElem}
            </span>
        );
    };

    sendHashtag = e => {
        e.preventDefault();
        if (this.state.tags.length === 0) {
            alert("해시태그를 입력해주세요")
        } else{
            // alert(`선택된 해시태그: ${this.state.tags}`)
            this.props.handleHashtag(this.state.tags)
        }
    }

    render() {
        const { tags, inputVisible, inputValue } = this.state;
        const tagChild = tags.map(this.forMap);

        return (
            <form style={{
                position: 'relative',
                textAlign: 'center'
            }} onSubmit={this.sendHashtag}>
                <div
                    style={{
                        position: 'relative',
                        padding: '20px',
                        textAlign: 'center'
                    }}>

                    {/* 해시태그 입력중 */}
                    {inputVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="large"
                            style={{
                                background: 'white',
                                color: 'black',
                                border: '1px solid #717171',
                                padding: 0,
                                width: '90%',
                                height: '40px',
                                margin: '0 auto',
                                fontSize: '16px',
                                lineHeight: '40px',
                                textAlign: 'center'
                            }}
                            value={inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputConfirm}
                            onPressEnter={this.handleInputConfirm}
                        />
                    )}

                    {/* 해시태그 입력 안하고 있음 */}
                    {!inputVisible && (
                        <Tag onClick={this.showInput}
                            style={{
                                background: 'white',
                                color: 'gray',
                                border: '1px dashed #717171',
                                padding: 0,
                                width: '90%',
                                height: '40px',
                                margin: '0 auto',
                                fontSize: '16px',
                                lineHeight: '40px'
                            }}
                        >
                            <BsPlusCircle
                                style={{
                                    margin: '0 3px 3px 3px'
                                }} />
                            해시태그 입력
                        </Tag>
                    )}
                </div>

                <div className="hashtag_box"
                    style={{
                        width: '300px',
                        padding: '10px',
                        margin: '0 auto',
                        overflow: 'hidden'
                    }}>

                    <TweenOneGroup
                        enter={{
                            scale: 1,
                            opacity: 0,
                            type: 'from',
                            duration: 100,
                            onComplete: e => {
                                e.target.style = '';
                            },
                        }}
                        leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                        appear={false}
                    >
                        {tagChild}
                    </TweenOneGroup>

                    <Button style={{
                        margin: '0 auto',
                        fontSize: '14px',
                        width: '80%',
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: '5px',
                        alignItems: 'center',
                        textAlign: 'center',
                        lineHeight: '14px',
                        fontWeight: 'bold',
                    }}
                        htmlType="submit"
                        type="button">
                        <span> 해시태그 확인 </span>
                    </Button>
                </div>
            </form>
        );
    }
}

export default withRouter(RegisterPage4)