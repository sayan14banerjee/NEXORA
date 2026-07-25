from sqlalchemy.orm import Session

from app.models.message import Message
from app.core.enums import MessageRole

class MessageRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(
            self, 
            conversation_id: str, 
            role: MessageRole, 
            content: str
            ) -> Message:
        
        message = Message(
            conversation_id=conversation_id, 
            role=role, 
            content=content)
        
        self.db.add(message)
        self.db.commit()
        self.db.refresh(message)
        return message

    # def get_messages_by_conversation(self, conversation_id: str) -> list[Message]:
    #     return self.db.query(Message).filter(Message.conversation_id == conversation_id).all()