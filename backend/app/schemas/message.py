from datetime import datetime
from pydantic import BaseModel, ConfigDict
from app.core.enums import MessageRole

class MessageCreate(BaseModel):
    conversation_id: str
    role: MessageRole
    content: str

class MessageResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    conversation_id: str
    role: MessageRole
    content: str
    created_at: datetime
    updated_at: datetime