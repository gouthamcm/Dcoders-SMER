package com.example.se_project.chatbot;

public class ChatMessage {
    String mSendMessage;
    String mReceiveMessage;
    public ChatMessage(String sendMessage,String receiveMessage){
        this.mSendMessage = sendMessage;
        mReceiveMessage = receiveMessage;
    }

    public String getmSendMessage() {
        return mSendMessage;
    }

    public String getmReceiveMessage() {
        return mReceiveMessage;
    }
}
