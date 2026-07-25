from sqlalchemy.orm import Session
from app.models.conversation import Conversation

class ConversationRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, title: str = "New Chat") -> Conversation:
        conversation = Conversation(
            title=title
            )
        self.db.add(conversation)
        self.db.commit()
        self.db.refresh(conversation)
        return conversation
    
    def get_all(self) -> list[Conversation]:
        return (
            self.db.query(Conversation)
            .order_by(Conversation.updated_at.desc())
            .all()
        )
    
    def get_by_id(
        self,
        conversation_id: str,
    ) -> Conversation | None:

        return (
            self.db.query(Conversation)
            .filter(
                Conversation.id == conversation_id
            )
            .first()
        )
    
    def update_title(self, conversation: Conversation, new_title: str) -> Conversation:
        conversation.title = new_title
        self.db.commit()
        self.db.refresh(conversation)
        return conversation

    def delete(self, conversation: Conversation) -> None:
        self.db.delete(conversation)
        self.db.commit()


