from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.services.conversation_service import ConversationService


def get_conversation_service(
    db: Session = Depends(get_db),
) -> ConversationService:

    return ConversationService(db)