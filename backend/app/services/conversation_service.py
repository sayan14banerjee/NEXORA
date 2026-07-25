from sqlalchemy.orm import Session

from app.repositories.conversation_repository import ConversationRepository
from app.models.conversation import Conversation

class ConversationService:

    def __init__(self, db: Session):

        self.repository = ConversationRepository(db)

    def create_conversation(
        self,
        title: str | None = None,
    ) -> Conversation:
        if not title:
            title = "New Chat"

        return self.repository.create(title)
    
    def get_all_conversations(self) -> list[Conversation]:
        return self.repository.get_all()
    
    def get_conversation(
        self,
        conversation_id: str,
    ) -> Conversation | None:

        return self.repository.get_by_id(
            conversation_id
        )
    
    def delete_conversation(
        self,
        conversation_id: str,
    ) -> bool:
        conversation = self.repository.get_by_id(
    conversation_id
        )
        if not conversation:
            return False
        
        self.repository.delete(
            conversation
        )
        return True 
    
    def rename_conversation(
        self,
        conversation_id: str,
        title: str,
    ) -> Conversation | None:
        conversation = self.repository.get_by_id(
            conversation_id
        )
        if not conversation:
            return None
        
        return self.repository.update_title(
            conversation,
            title
        )
    