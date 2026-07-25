from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.message import MessageCreate, MessageResponse
from app.services.message_service import MessageService

router = APIRouter(
    prefix = "/messages",
    tags = ["messages"]
)

@router.post(
    "", 
    response_model=MessageResponse)
def create_message(
    request: MessageCreate,
    db: Session = Depends(get_db)
    ):
    service = MessageService(db)

    return service.create_message(
        conversation_id=request.conversation_id,
        role=request.role,
        content=request.content
    )