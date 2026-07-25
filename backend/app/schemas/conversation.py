from pydantic import BaseModel, ConfigDict
from datetime import datetime



class ConversationCreate(BaseModel):
    title: str | None = None

class ConversationUpdate(BaseModel):
    title: str

class ConversationResponse(BaseModel):

    model_config = ConfigDict(
        from_attributes=True
    )

    id: str
    title: str
    created_at: datetime
    updated_at: datetime