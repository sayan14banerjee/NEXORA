from datetime import datetime
from uuid import uuid4

from sqlalchemy import DateTime, Enum, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.enums import MessageRole

from app.database.base import Base
# from app.models.conversation import Conversation



class Message(Base):
    __tablename__ = "messages"

    id: Mapped[str] = mapped_column(
        String(36), 
        primary_key=True, 
        default=lambda: str(uuid4())
        )
    
    conversation_id: Mapped[str] = mapped_column(
        ForeignKey("conversations.id"), 
        nullable=False
        )
    role: Mapped[MessageRole] = mapped_column(
        String(10),
        nullable=False
        )
    
    content: Mapped[str] = mapped_column(
        Text, 
        nullable=False
        )
    
    created_at: Mapped[datetime] = mapped_column(
        DateTime, 
        default=datetime.utcnow
        )
    
    updated_at: Mapped[datetime] = mapped_column(
        DateTime, 
        default=datetime.utcnow, 
        onupdate=datetime.utcnow
        )

    # Relationship to conversation
    conversation: Mapped["Conversation"] = relationship(
        back_populates="messages"
        )