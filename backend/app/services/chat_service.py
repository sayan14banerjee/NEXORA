from sqlalchemy.orm import Session

from app.services.llm_service import LLMService
from app.services.search_service import SearchService
from app.services.message_service import MessageService
from app.services.conversation_service import ConversationService


class ChatService:

    def __init__(self, db: Session):

        self.llm_service = LLMService()

        self.search_service = SearchService()

        self.message_service = MessageService(db)

        self.conversation_service = ConversationService(db)