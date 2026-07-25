from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.conversation import (
    ConversationCreate,
    ConversationUpdate,
    ConversationResponse,
)
from app.services.conversation_service import ConversationService

from app.dependencies.conversation import get_conversation_service

router = APIRouter(
    prefix="/conversations",
    tags=["Conversations"],
)

@router.post(
    "",
    response_model=ConversationResponse,
)
def create_conversation(
    request: ConversationCreate,
    service: ConversationService = Depends(get_conversation_service),
):


    return service.create_conversation(request.title)

@router.post(
    "",
    response_model=ConversationResponse,
)
def create_conversation(
    request: ConversationCreate,
    service: ConversationService = Depends(get_conversation_service),
):


    return service.create_conversation(request.title)

@router.get(
    "/{conversation_id}",
    response_model=ConversationResponse,
)
def get_conversation(
    conversation_id: str,
    db: Session = Depends(get_db),
):

    service = ConversationService(db)

    conversation = service.get_conversation(
        conversation_id
    )

    if conversation is None:

        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    return conversation

@router.get(
    "",
    response_model=list[ConversationResponse],
)
def get_all_conversations(
    service: ConversationService = Depends(get_conversation_service),
):

    return service.get_all_conversations()

@router.patch(
    "/{conversation_id}",
    response_model=ConversationResponse,
)
def rename_conversation(
    conversation_id: str,
    request: ConversationUpdate,
    service: ConversationService = Depends(get_conversation_service),
):


    conversation = service.rename_conversation(
        conversation_id,
        request.title,
    )

    if conversation is None:

        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    return conversation


@router.delete(
    "/{conversation_id}",
)
def delete_conversation(
    conversation_id: str,
    service: ConversationService = Depends(get_conversation_service),
):


    deleted = service.delete_conversation(
        conversation_id
    )

    if not deleted:

        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    return {
        "message": "Conversation deleted successfully"
    }
