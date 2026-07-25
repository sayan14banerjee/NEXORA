from sqlalchemy.orm import Session

from app.models.message import Message
from app.core.enums import MessageRole
from app.repositories.message_repository import MessageRepository

class MessageService:

    def __init__(self, db: Session):
        self.repository = MessageRepository(db)

    def create_message(
            self, 
            conversation_id: str, 
            role: MessageRole, 
            content: str
            ) -> Message:
        
        return self.repository.create(
            conversation_id=conversation_id, 
            role=role, 
            content=content
            )